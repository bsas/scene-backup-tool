/*
 * Create a custom config setting
 */
Hooks.once('init', () => {
    game.settings.register('scene-backup-tool', 'storage', {
        scope: 'world',
        config: false,
        type: Object,
        default: {},
    });
});

/*
 * Scene Backup Tool main logic
 */
async function sceneBackupTool(scene) {
    let storage = game.settings.get('scene-backup-tool', 'storage') || {}

    async function backup() {
        let data = JSON.parse(JSON.stringify(scene))
        storage[scene.id] = data
        await game.settings.set('scene-backup-tool', 'storage', storage)
        ui.notifications.info(`Backup created to scene '${scene.name}'`)
    }

    async function restore() {
        let data = storage[scene.id]
        await scene.importFromJSON(JSON.stringify(data))
        ui.notifications.info(`Backup restored to scene '${scene.name}'`)
    }

    async function remove() {
        delete storage[scene.id]
        await game.settings.set('scene-backup-tool', 'storage', storage)
        ui.notifications.info(`Backup removed for scene '${scene.name}'`)
    }

    return await new Promise((resolve) => {
        let btns = storage[scene.id] ? [
            ['Backup Scene', backup],
            ['Restore Scene', restore],
            ['Remove Backup', remove]
        ] : [
            ['Backup Scene', backup]
        ]

        let buttons = {}
        btns.forEach(([str, callback]) => {
            buttons[str] = {
                label: str,
                callback
            }
        })

        dialog = new Dialog({
            title: 'Scene Backup Tool',
            content: '',
            buttons,
            close: () => resolve(true)
        }).render(true)
    })
};

/*
 * Scene context menu
 */
function getSceneBackupToolContextOption(idField) {
    return {
        name: "SCENEBACKUPTOOL.LABEL",
        icon: '<i class="fas fa-undo"></i>',
        condition: li => game.user.isGM,
        callback: li => {
            let scene = game.scenes.get(li.data(idField));
            sceneBackupTool(scene)
        }
    };
};

Hooks.on("getSceneNavigationContext", (html, contextOptions) => {
    contextOptions.push(getSceneBackupToolContextOption('sceneId'));
});

Hooks.on("getSceneDirectoryEntryContext", (html, contextOptions) => {
    contextOptions.push(getSceneBackupToolContextOption('entityId'));
});
