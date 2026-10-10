# Fallout Shelter — Save Editor Enhanced Edition

**Enhanced distribution maintained by: [EzakiHaku](https://github.com/EzakiHaku)**  
**Release note date / 发布说明日期: 2026-10-10**  
**Status: Unofficial community derivative / 非官方社区衍生版**

## English

### About

A community-enhanced edition of the Fallout Shelter save editor, based on [MobileSam's original project](https://github.com/MobileSam/shelter-editor) and [rakion99's fork](https://github.com/rakion99/shelter-editor). The fork's existing interface also acknowledges [TheCreatorJames](https://github.com/TheCreatorJames). Original authorship and third-party rights are retained. EzakiHaku is credited as the maintainer of this **enhanced distribution**, not the sole author of all bundled code.

### Included functionality

- Vault and individual-dweller editing inherited from upstream.
- Multi-select resident editing tools for surname, level, weapon and outfit.
- Normal individual editing preserved outside Batch Edit mode.
- A redesigned navigation and separate batch-selection workspace.
- English/Chinese equipment labels with name-based A–Z sorting, searches and per-session favorites.
- Contextual visibility of Wasteland tabs according to valid loaded save data.
- Readability-conscious translucent editor surface.
- Readable attribution links, a bilingual Credits page, and a standalone decryptor page.

### Use

1. Extract **all** files together; keep `index.html`, `js/`, `css/`, `fonts/`, `presets/`, and supporting files in the original structure.
2. Open `index.html` in a recent desktop browser and import your own Fallout Shelter `.sav` file.
3. **Back up your original save.** After editing, use the Save button to export a new `.sav` file and verify it by reimporting before overwriting any in-game copy.
4. Use `Credits / 致谢` next to the Save control, or open `CREDITS.html`, to review author and license information.

This package contains no player save files. Do not publish other players' personal saves or account information.

### Licensing and provenance

- `LICENSE.md` preserves the fork's **GNU Affero General Public License v3 (or later)** text without modification. The modified editor code is presented under the applicable terms of that license; distributing the modified program requires supplying its corresponding source and retaining relevant notices.
- `LICENSES/MobileSam-MIT.txt` preserves the original MobileSam **MIT** license and Samuel Dionne's notice. The original project and its fork have different license statements; they should not be conflated.
- `NOTICE.md` and `THIRD_PARTY_NOTICES.md` provide detailed attribution and dependency notes.
- Historical website-specific text is copied into `UPSTREAM_LEGACY_NOTICE.html`; some old Creative Commons or website-specific wording has an **unverified scope**, and should not be treated as blanket relicensing of the modified program.
- Third-party components, fonts, graphics and game imagery may have separate rights. **Distribution clearance for every asset has not been independently verified.** Review the third-party audit before publishing; if necessary, replace or remove any asset whose rights are unclear.

This derivative is **not official** and is not endorsed by Bethesda or the original maintainers. You use it at your own risk. This software is provided without warranty, subject to applicable licenses.

### Original references

- Original: https://github.com/MobileSam/shelter-editor
- Fork: https://github.com/rakion99/shelter-editor
- Original author's MIT license: https://github.com/MobileSam/shelter-editor/blob/master/LICENSE
- Fork demo: https://rakion99.github.io/shelter-editor/
- Enhanced edition maintainer profile (repository URL not assumed): https://github.com/EzakiHaku

## 中文

### 项目介绍

这是《辐射：避难所》存档编辑器的社区增强版本，基于 [MobileSam 的原始项目](https://github.com/MobileSam/shelter-editor) 和 [rakion99 的衍生分支](https://github.com/rakion99/shelter-editor) 进一步改造。原分支界面还明确致谢 [TheCreatorJames](https://github.com/TheCreatorJames)。原作者、历史贡献者及第三方权利人的署名和权利继续保留。**EzakiHaku 是本增强发行版本的维护者**，不代表其独立创作了全部上游代码。

### 主要功能

- 继承原版避难所与单名居民编辑能力。
- 支持居民多选后的姓氏、等级、武器、服装批量修改。
- 未开启 Batch Edit 时保留原有单人编辑功能。
- 重新设计导航菜单与分离式批量编辑工作区。
- 装备英文/中文显示、按英文名称 A–Z 排序、搜索及本次会话收藏优先。
- 根据实际存档中的有效探险角色动态显示 Wasteland 页签。
- 兼顾背景可见度与数值输入可读性的半透明界面。
- 页面内双语致谢入口、独立致谢页和原有独立解密页面。

### 使用方式

1. 解压**整个**压缩包，保持 `index.html` 和 `js/`、`css/`、`fonts/`、`presets/` 等目录结构不变。
2. 使用较新的桌面浏览器打开 `index.html`，导入自己的 `.sav` 存档。
3. **请务必备份原始存档。** 编辑后点击 Save 导出新的 `.sav`，重新导入核对后再考虑覆盖游戏中的存档。
4. 可点击 Save 附近的 `Credits / 致谢` 或打开 `CREDITS.html` 阅读完整声明。

本安装包不包含玩家存档，请勿公开其他玩家的个人存档或账号信息。

### 许可及来源

- `LICENSE.md` 完整保留上游分支的 **GNU AGPL 第 3 版（或更新版本）** 英文许可文本。衍生程序分发需遵守适用条款，例如随程序提供相应源代码并保留相关声明。
- `LICENSES/MobileSam-MIT.txt` 保留 MobileSam 原项目的 **MIT 许可证**及 Samuel Dionne 版权声明。不同项目阶段的授权不可混为一谈。
- `NOTICE.md` 与 `THIRD_PARTY_NOTICES.md` 提供更详尽的署名和依赖信息。
- 上游旧网站专属条款完整保存在 `UPSTREAM_LEGACY_NOTICE.html`。其中 Creative Commons 声明或站点特定措辞的**适用范围尚未核定**，不可据此宣称增强版所有代码统一采用此许可。
- 第三方代码、字体、图片及游戏素材可能适用其他权利条款，**目前尚未独立核实全部资源的公开再分发权限**。正式发布前应审查对应文件，必要时替换或移除授权不明的资源。

本工具为**非官方粉丝衍生项目**，不代表 Bethesda 或上游作者立场，也不意味着获得他们的官方认可。请自行承担存档使用风险；软件在适用许可证规定范围内不提供担保。

### 原作者及相关链接

- 原始项目：https://github.com/MobileSam/shelter-editor
- 后续分支：https://github.com/rakion99/shelter-editor
- 原项目 MIT：https://github.com/MobileSam/shelter-editor/blob/master/LICENSE
- 分支体验：https://rakion99.github.io/shelter-editor/
- 增强版维护者个人主页（不预设增强版仓库地址）：https://github.com/EzakiHaku

---

For auditing results, see [`CODE_REVIEW.md`](CODE_REVIEW.md). / 审查结果详见 [`CODE_REVIEW.md`](CODE_REVIEW.md)。


### Publication asset update (2026-10-10)

- Original Fallout-branded `bg.png` replaced by a newly generated, unbranded retro-futuristic illustration. The previous picture should **not** be uploaded to the public repository.
- Bootstrap 3's bundled GLYPHICONS Halflings fonts are retained under the special Bootstrap-era licensing arrangement with author attribution; see `THIRD_PARTY_NOTICES.md` and `LICENSES/Bootstrap-3-MIT.txt`.
- This update does not certify rights for every other dependency or bundled preset. See `ASSET_RELEASE_CHECKLIST.md`.

### 公开素材更新（2026-10-10）

- 已将包含 Fallout 官方标志与人物的旧 `bg.png` 替换为新生成的无官方商标的复古科幻背景。**请勿再将旧图上传至公开仓库。**
- 保留 Bootstrap 3 随附的 GLYPHICONS Halflings 图标字体，并补充其原作者署名与 Bootstrap MIT 许可出处；参见 `THIRD_PARTY_NOTICES.md` 及 `LICENSES/Bootstrap-3-MIT.txt`。
- 本次仅核查并处理指定素材，不代表所有预设及第三方脚本均已完成完整版权审查；见 `ASSET_RELEASE_CHECKLIST.md`。
