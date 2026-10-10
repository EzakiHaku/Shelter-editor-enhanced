# Code and Publication Review / 代码与发布检查报告

**Review date / 检查日期:** 2026-10-10  
**Submitted project:** `shelter-editor-enhanced(2).rar`  
**Reviewed release maintainer:** EzakiHaku  
**Review type:** static source review + license attribution/provenance audit; NOT a completed security or game-save compatibility certification.

## English

### Scope and method

- Extracted and examined the submitted archive: **34 regular files** before modification, including HTML, CSS, JavaScript, preset JSON, a translation CSV, one background image and an AGPL license.
- Read entry points `index.html`, `SaveDecrypt.html`, editable `js/shelter.js`, `js/batch-select.js`, `css/style.css`, historical README/LICENSE and the bundled script notices.
- Performed JavaScript syntax validation with Node.js `--check` on all **12** shipped `.js` files and the inline scripts in `index.html`.
- Parsed the principal HTML pages and checked for duplicate element IDs and missing relative references.
- Checked the original source repositories' declared license labels; original MobileSam source is MIT, later rakion99 fork is AGPL-3.0.
- Added documentation and attribution **without changing the bodies of save encryption/decryption or batch-edit functions**.
- Browser automation could not perform a rendering/file-import end-to-end test because navigation was blocked by the execution environment's administrator policy (`net::ERR_BLOCKED_BY_ADMINISTRATOR` for both local files and localhost). This is a testing limitation, not evidence of a runtime fault in the project.

### Verified results

| Check | Result |
|---|---|
| All 12 JavaScript source files parsed by Node.js | PASS |
| Both inline scripts in index.html parsed by Node.js | PASS |
| Principal HTML pages without duplicated element IDs | PASS |
| Checked relative `src` / `href` file targets exist | PASS |
| Original `LICENSE.md` AGPL license text retained verbatim | PASS |
| Original JS save/decrypt functional bodies preserved | PASS (attribution comments only) |
| Full browser functionality and `.sav` round-trip | **NOT TESTED** (requires manual validation) |
| All third-party asset redistribution rights confirmed | **NOT VERIFIED** |

### Findings and recommendations

| Severity | Observation | Recommended next action |
|---|---|---|
| High — publication rights | Bundled `bg.png` artwork, icon-font components, some presets and helpers have not had their redistributable rights fully documented. | Verify asset provenance; replace/remove if redistribution is not permitted. |
| High — third-party licensing | Upstream program uses AGPL-3.0; original MobileSam is MIT; `jscolor.js` embeds GPLv3-for-open-source header; old HTML stated CC BY-NC-SA for an unclear scope. | Preserve notices and source; confirm per-file licensing scope before declaring the entire archive legally cleared. |
| Medium — security maintenance | Legacy AngularJS and jQuery 2.1.4 are bundled; the project has no identified dependency lockfile or automated vulnerability checks. | Review security advisories and plan a separate migration with regression testing; do not upgrade them in the attribution-only release. |
| Medium — encryption compatibility | Existing `js/shelter.js` uses SJCL CBC decryption, and the code contains an unauthenticated-CBC warning acknowledgement. Changing crypto format can break `.sav` compatibility. | Keep existing save format for this release; separately document risk, input errors and test cases before any crypto refactor. |
| Medium — maintainability | 1,500+ line `index.html` combines large CSS blocks, Angular expressions and inline scripts; 1,200+ line `js/shelter.js`; `js/batch-select.js` is ~329 lines. | Modularize incrementally only with UI and save regression tests. |
| Low — UX/a11y | Original markup still uses legacy `<center>` and `<br>` layout patterns and native `alert/confirm`. | Replace with semantic UI in a future non-breaking release, after accessibility and keyboard testing. |
| Low — publication metadata | Old README contained almost no distribution guidance; UI linked to upstream and displayed old site-specific disclaimers. | Addressed with bilingual README, CREDITS, NOTICE and an archived copy of the historical text. |

### Manual release test checklist (required before public publication)

1. Extract the entire ZIP into a new folder; run `index.html` from the local filesystem in Chrome/Edge.
2. Confirm the green title/navigation and the `Credits / 致谢` badge next to Save; open `CREDITS.html`, then check English precedes Chinese.
3. Load a **copy** of a known-good `.sav`. No unrelated browser alert, blank tab or script crash should occur.
4. In normal mode, select a dweller and change one harmless test field; ensure individual forms still work.
5. Enter Batch Edit; select two dwellers. Check surname, level, weapon and outfit *individually* with confirmation, plus Select All and Clear All. Confirm selected count matches checkboxes.
6. Check personal and batch equipment selectors: English A–Z, left English/right Chinese, star/unstar favorites, per-session priority and reset on new save.
7. Scroll batch controls and resident list separately; confirm checkboxes never overlap fixed controls.
8. Check WastelandD/H tabs for a save with valid explorers, and their disappearance when no valid actor exists.
9. Click Save, export under a **new name**, refresh editor, reimport, and verify all edited values persist. Keep the untouched original save as a backup.
10. Review `THIRD_PARTY_NOTICES.md` and acquire/reconfirm appropriate rights for all distributed images/fonts/presets before publishing.

### Release change policy

This review focuses on attribution and professionalism: avoid silent rewrites of cryptography, save schemas, Angular models, third-party minified libraries, and game asset files. Attributed modifications are limited to `index.html`, `SaveDecrypt.html`, headers of `js/shelter.js`, `js/batch-select.js`, `css/style.css`, and new legal/documentation pages. For precise details, see CHANGELOG.md.

## 中文

### 审查范围

- 已检查上传 RAR 解压出的 **34 个普通文件**，涵盖 HTML、CSS、JS、JSON 预设、装备翻译 CSV、背景图与原许可证。
- 检查主入口、独立解密页面、核心保存逻辑、居民批量编辑代码以及第三方依赖头部说明。
- 对 **12 个 JS 文件**与 `index.html` 的 2 段内嵌 JS 完成 Node.js 语法检查。
- 检查主要 HTML 页面 ID 重复及相对本地链接缺失情况。
- 核实 MobileSam 原项目为 MIT，而 rakion99 分支标示为 AGPL-3.0。
- **没有修改存档加解密与批量编辑函数的执行逻辑**；与源码功能有关的变动仅涉及文件头部署名注释和展示层。
- 尝试在自动化 Chromium 中访问 `file://` 与 `localhost`，均遭执行环境管理策略阻挡。因此未完成真实浏览器操作及 `.sav` 回存测试；这是一项测试限制，不表示软件本身运行异常。

### 已通过的项目

- 12 个 JavaScript 文件语法检查：通过。
- 主页内嵌 JS 语法检查：通过。
- 主要 HTML 页面未发现重复 `id`：通过。
- 所检查的本地引用资源均可找到：通过。
- 原始 `LICENSE.md` AGPL 文本未改动：通过。
- 核心 JS 逻辑未改（仅增加头部注释）：通过。
- **完整存档导入、编辑、导出及重新导入：尚未实机验证。**
- **全部第三方图片、字体等资源的公开再分发权限：尚未核实。**

### 主要问题与优先级

1. **高优先级：公开发布授权。** `bg.png`、Glyphicons 字体、预设文件、部分历史脚本尚缺完整来源与再分发许可检查；正式发布前应确认，必要时替换或移除。
2. **高优先级：多重许可来源。** 原始 MIT、后续 AGPL、jscolor GPLv3 与页面历史 CC 标签不能当作同一许可证；要按各代码和资源的实际来源遵守条款。
3. **中优先级：旧依赖安全性。** AngularJS、jQuery 2.1.4 已老旧；不宜在此仅做署名的版本中直接升级，应另开版本进行完整回归测试。
4. **中优先级：存档加解密历史实现。** 存在 CBC 完整性风险的代码提示；不可在没有大量测试样例时随意改变加密逻辑，否则可能无法兼容存档。
5. **中优先级：结构规范。** 长 HTML 同时承载大量样式和脚本，核心 JS 文件较大，未来可在不影响功能的前提下模块化。
6. **低优先级：语义化与可访问性。** 旧版 `<center>`、`<br>` 布局和原生提示框建议今后逐步替换；本次未改动风险较高的交互实现。
7. **已改进：发布资料。** 现在有完整英中双语 README、NOTICE、CREDITS 页面及旧版权内容存档。

### 正式发布前的手动复测

请按上面的英文清单核对：从 ZIP 整体解压 → 验证导航与致谢入口 → 用**备份存档**测试单人/批量操作 → 检查双语排序和收藏 → 测试双滚动区域 → 保存为**新文件** → 重新导入核验 → 确认第三方资源再分发许可。

**结论：当前为“静态检查通过、功能需实机复测、资源许可需核查”的候选发行包。不能仅凭静态检查宣称已完成公开发布的全部合规与安全验证。**

## Follow-up / 后续补充：2026-10-10 asset review

- Replaced `bg.png` containing the Fallout Shelter wordmark and Vault Boy with a newly generated non-branded sci-fi illustration. The original game-branded image should not be placed into the public repository without permission. / 将含 Fallout 商标和人物的背景替换成新生成的非品牌科幻图片；未获授权前不建议发布旧图。
- Identified uploaded `glyphicons-halflings-regular.*` as Bootstrap 3's bundled GLYPHICONS Halflings set, for which the creator describes a Bootstrap-specific license arrangement. Preserve Bootstrap 3 MIT notice and GLYPHICONS attribution. / 核对字体为 Bootstrap 3 所附带版本，保留 Bootstrap MIT 声明及 GLYPHICONS 署名。
- **Scope limitation:** This addendum does not assert completed licensing review for every other source asset, preset or bundled library; the earlier review's remaining warnings still apply. / 其他脚本与预设的版权来源仍需后续核实。
