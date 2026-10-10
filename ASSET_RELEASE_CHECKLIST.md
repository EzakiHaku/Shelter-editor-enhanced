# Public GitHub asset checklist / GitHub 发布前素材核对

Maintainer / 维护者: **EzakiHaku** · 2026-10-10

## English

1. The former `bg.png` was branded with Fallout Shelter imagery. **Do not upload that previous file** without permission. This patch replaces it with a newly generated generic retro-futuristic illustration. OpenAI image generation used for this replacement; rights of actual game trademarks/art remain with their owners. This is not a legal guarantee.
2. The five `fonts/glyphicons-halflings-regular.*` files were identified as the Bootstrap 3 GLYPHICONS Halflings bundle. Retain the existing local originals, preserve Bootstrap's MIT license and credit GLYPHICONS/Jan Kovařík. This package purposefully contains **no font files**.
3. Keep the existing upstream MIT and AGPL notices. Do not assert the MIT license for the whole AGPL-derived editor or for all images.
4. Continue checking `js/jscolor.js`, other historic scripts, `presets/*.json` and `equipment_translation_reference.csv` source and any redistribution conditions before presenting the entire release as fully cleared.
5. Test the page by opening `index.html` and loading a backup `.sav`, then export/reimport. Only the background file and documentation changed in this patch.
6. Use file-level replacements from the patch zip, preserving exact folder paths. Files not in the patch zip must remain in the project unchanged.

**Sources:**
- Bethesda community standards: https://bethesda.net/en-US/news/bethesda-softworks-community-standards
- Bootstrap 3 bundled files: https://getbootstrap.com/docs/3.3/getting-started/
- Bootstrap v3.3.7 MIT license: https://github.com/twbs/bootstrap/blob/v3.3.7/LICENSE
- GLYPHICONS creator's licensing history: https://www.glyphicons.com/blog/introducing-version-2-0/

## 中文

1. 旧版 `bg.png` 含《辐射：避难所》商标和人物；没有取得明确授权时**不要再上传旧图**。补丁用新生成的通用复古科幻背景替换，不有意包含官方品牌元素。此举是降低风险，而非法律上的绝对保证。
2. 五种 `Glyphicons Halflings` 字体属于 Bootstrap 3 随附图标集。请保留本地项目已有的原版文件，同时保留 Bootstrap MIT 许可及 GLYPHICONS／Jan Kovařík 署名。本补丁不包含字体文件。
3. 继续保留原始 MIT 与衍生版 AGPL 声明；不要将 MIT 许可擅自扩展到整个增强项目或所有图像。
4. `js/jscolor.js`、其他历史脚本、`presets/*.json`、装备译名对照表的来源与再分发条件仍应核查。
5. 替换后用备份 `.sav` 验证网页能打开、可编辑及能导出重新导入。此补丁不改动操作代码。
6. 将压缩包中各文件放回同名相对目录，原工程其他文件保持不变。
