# Scene Backup Tool
This is a Foundry VTT module for GMs to quickly backup and restore scenes.


# Installation
1. Inside Foundry's Configuration and Setup screen, go to **Add-on Modules**
2. Click "Install Module"
3. In the Manifest URL field paste: `https://raw.githubusercontent.com/bsas/scene-backup-tool/main/module.json`


# Usage

When you want to modify or test a scene that your are building it is very handy to take a "snapshot" (similar to a quick save) of the entire scene status (doors, actor tokens, etc) so you can mess around with all that and go back (quickly restore) to the previous state of the scene.

The concept is quite simple: Before you do any major modification on a scene, just click on **Backup Scene** and this module will automatically create a backup of the scene state. Then at anytime you can click on **Restore Scene** to restore it to that state. If you are concerned with the storage or for your own organization you can always click on **Remove Backup** to remove the backup for that scene.

# Changelog
### 1.0.2
- Minor fixes

### 1.0.1
- Fixing asynchronous calls

### 1.0.0
- Initial Release

# Support
For questions, feature requests, or bug reports, feel free to contact me on the Foundry Discord (bsas#8456) or open an issue here directly.

# License
This Foundry VTT module, written by bsas, is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

This work is licensed under [Foundry Virtual Tabletop EULA - Limited License Agreement for module development](https://foundryvtt.com/article/license/).