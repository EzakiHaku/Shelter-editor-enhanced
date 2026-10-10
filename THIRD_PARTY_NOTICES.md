# Third-party component inventory / 第三方组件清单

## English

The following inventory is based on file names and the notices **contained in the uploaded distribution**. It is not a full provenance or distribution-rights certification. Original upstream/vendor comments have not been removed. Do not assert that all assets may be freely republished without further review.

| Bundled path | Identified component or provenance | Observed/review status |
|---|---|---|
| `js/angular.min.js` | AngularJS (legacy; embedded license header refers to MIT) | Keep embedded notice; old unsupported generation; check precise version and advisory exposure before hosting online |
| `js/jquery-2.1.4.min.js` | jQuery 2.1.4 | Header credits jQuery Foundation; legacy version; check exact license and updates |
| `js/bootstrap*.js`, `css/bootstrap*.css`, `fonts/glyphicons*` | Bootstrap 3-era CSS/JS and bundled Glyphicons fonts | Bootstrap 3 MIT license; the Halflings version bundled with Bootstrap was released under its corresponding Bootstrap license by arrangement with the icon creator. Preserve Bootstrap notice and credit GLYPHICONS |
| `js/jscolor.js` | jscolor library | Embedded header identifies GPLv3 for open-source usage / commercial license alternative; compatibility and provenance should be checked |
| `js/aes.js`, `js/DeEn.js` | Encryption/decryption components | Exact provenance and notices not independently verified; core logic untouched |
| `js/FileSaver.js`, `js/json2.min.js`, `js/npm.js` | Bundled JS helpers | Separate upstream notices/versions should be verified |
| `bg.png` | Fallout-themed background | REPLACED in 2026-10-10 asset patch by newly generated original retro-sci-fi illustration without Fallout logo or Vault Boy imagery; not the former game-branded bg.png |
| `presets/*.json` | Example save presets | No user saves included; provenance and redistribution scope have not been independently verified |
| `equipment_translation_reference.csv` | Bilingual equipment name reference | Attribution and translation provenance should be checked before redistribution |

The MobileSam MIT notice is reproduced in `LICENSES/MobileSam-MIT.txt`. The parent rakion99 branch is distributed with AGPL-3.0. The legacy HTML also contained a CC notice whose scope is uncertain (see `UPSTREAM_LEGACY_NOTICE.html`).

Before public distribution, review original notices/permissions for bundled images, fonts, presets and code; ensure a copy of all required license texts and corresponding source is provided. If permission cannot be established for an asset, replace it with authorized artwork or remove it.

## 中文

本清单依据上传包内的文件名、头部信息及现有声明整理，**并不代表已完成全部组件的授权溯源或取得公开分发授权**。原有第三方代码和版权注释均予保留。

- `angular.min.js`：旧版 AngularJS；内嵌 MIT 信息，版本已过时，联网部署前需进一步安全评估。
- `jquery-2.1.4.min.js`：jQuery 2.1.4，保留原有署名，属于旧版依赖。
- `bootstrap*` 与 `glyphicons*`：Bootstrap 3 时代的脚本、样式和 Halflings 图标字体。该随 Bootstrap 发行的字体版本经作者特别许可使用与相应 Bootstrap 版本一致的开源许可。保留 Bootstrap MIT 协议与 GLYPHICONS 原作者出处。
- `jscolor.js`：源码写明开源使用 GPLv3、另有商业授权选项；需核对其来源与兼容性。
- `aes.js`、`DeEn.js`、`FileSaver.js`、`json2.min.js`、`npm.js`：应继续核查各自的来源和许可，核心逻辑未改。
- `bg.png`：已在本次补丁中替换为新生成的通用复古科幻背景，不包含原图的游戏名称、Vault Boy 角色或官方美术；旧版游戏品牌背景不再随本补丁分发。
- `presets/*.json`：示例存档模板，需要核查来源及允许再分发范围。
- `equipment_translation_reference.csv`：装备双语参考译名，正式传播前应核查译名来源和归属。

原始 MobileSam 项目 MIT 声明位于 `LICENSES/MobileSam-MIT.txt`，rakion99 分支的 AGPL-3.0 全文位于 `LICENSE.md`。旧页面还包含适用范围不明的 CC 声明，已经完整留存于 `UPSTREAM_LEGACY_NOTICE.html`。

**正式在小黑盒或 GitHub 公开分发前**，务必核对图片、字体、示例预设与其他依赖的许可。无法确认授权时，应替换成明确允许分发的素材，或从发行包中删除相关资源。

## 2026-10-10 asset publication addendum / 素材发布补充

**English:** The previous Fallout-branded `bg.png` was replaced with an original-looking, newly AI-generated generic retro-futurist industrial scene generated for this project on 2026-10-10. No Bethesda character or wordmark is intentionally included. This is a risk-reduction step, not a guarantee against every possible third-party similarity or claim. `css/style.css` references `../bg.png`; no stylesheet change is required.

**GLYPHICONS Halflings:** Icon graphics by Jan Kovařík / GLYPHICONS (https://glyphicons.com/). Bundled with Bootstrap 3 by special license arrangement, as described by the author: https://www.glyphicons.com/blog/introducing-version-2-0/ . Bootstrap 3 license: https://github.com/twbs/bootstrap/blob/v3.3.7/LICENSE . Please retain the icon creator credit and Bootstrap license text in `LICENSES/Bootstrap-3-MIT.txt` alongside existing copyright notices. This note does **not** grant a standalone license to newer paid Glyphicons packages.

**中文：** 原 `bg.png`（含游戏商标及人物形象）已替换为 2026-10-10 为本项目生成的通用复古科幻工业场景，未有意使用 Bethesda 官方标志或 Vault Boy 人物。此举旨在降低权利风险，不保证排除一切相似性或潜在争议。`css/style.css` 原有的 `../bg.png` 引用无需修改。

**GLYPHICONS Halflings：** 图标原作者 Jan Kovařík / GLYPHICONS（https://glyphicons.com/）。随 Bootstrap 3 发布的旧版 Halflings 有专门的许可安排；见作者历史说明与 Bootstrap 3 MIT 许可证。请保留相关署名及 `LICENSES/Bootstrap-3-MIT.txt`，但勿据此推断其他收费版本也可随意转发。

**Remaining checks / 尚待核查：** Other third-party JavaScript libraries, bundled presets and translation references still require independent provenance/license review. / 其他 JavaScript 组件、预设与译名来源仍需另行核查，不应声称整个项目已经全面版权审查通过。
