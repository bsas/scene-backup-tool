# Simple Scene Backup Tool
This is a Foundry VTT module for pulling *every* player to a specific scene. If you have a large party and they are across various scenes, this adds a shortcut to pull the party together quickly  and easily.


# Installation
1. Inside Foundry's Configuration and Setup screen, go to **Simple Scene Backup Tool**
2. Click "Install Module"
3. In the Manifest URL field paste: `https://github.com/bsas/scene-backup-tool/blob/main/module.json`


# Usage

When you want to modify or test a scene your are building it is very handy to take a "snapshot" (similar to a quick save) of the entire scene status (doors, actor tokens, etc) so you can mess around with all that and go back (quickly restore) the original state of the scene.

The concept is quite simple: Before you do any major modification on a scene, just click on **Backup Scene** and this module will automatically create a backup of the scene state. Then at anytime you can click on **Restore Scene** to restore it to that state. If you are concerned with the storage of that or for your own organization you can always click on **Remove Backup** to remove the backup for that scene afterwards.

# Changelog
### 1.0.0
- Initial Release

# Support
For questions, feature requests, or bug reports, feel free to contact me on the Foundry Discord (bsas#8456) or open an issue here directly.

# License
This Foundry VTT module, written by bsas, is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

This work is licensed under [Foundry Virtual Tabletop EULA - Limited License Agreement for module development](https://foundryvtt.com/article/license/).