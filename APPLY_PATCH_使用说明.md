# Replace the background and update notices / 更换背景与声明

## 中文

这是**增量补丁，不是完整修改器**。请不要把补丁 ZIP 单独当作网页项目上传。

1. 先备份原来的 `shelter-editor-enhanced` 文件夹。
2. 在原项目文件夹中，删除或另行保存旧的 `bg.png`，不要将旧图公开上传。
3. 将本补丁 ZIP 解压后文件**按原有同名目录合并覆盖**到原项目根目录。例如 `bg.png` 放到原来 `index.html` 所在的目录；`LICENSES/Bootstrap-3-MIT.txt` 放到 `LICENSES/`。
4. **保留原项目所有其他文件不变**，特别是 `index.html`、`js/`、`css/`、`fonts/`、`presets/`。此补丁没有字体文件。
5. 双击项目的 `index.html`，检查新背景是否显示，并用测试存档尝试导出和重新导入。
6. 准备公开仓库时，上传合并后的完整项目目录内的文件，不是 ZIP 文件本身。

注意：Glyphicons 的历史许可依据已核实，但其余历史依赖／预设尚未逐一完成再分发审查；请勿将本补丁理解为项目的全面版权认证。

## English

This is an **incremental patch, not a full application**. Back up the project, merge the patched files into the corresponding paths, keep all other project files intact, and verify save import/export locally. Do not publish the former branded `bg.png`. The font files remain in your existing project and are **not** part of this patch. Preserve historical upstream software notices and perform further third-party licensing review as documented.
