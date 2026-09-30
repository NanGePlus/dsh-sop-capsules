/** `sop-capsules` namespace dictionaries. */
/** Dictionary namespace owned by this plugin. */
export declare const NS = "sop-capsules";
/** Simplified Chinese dictionary (the key-set source of truth). */
export declare const zh: {
    readonly 'header.aria': "提示胶囊";
    readonly 'header.tooltip.noWorkspace': "请先选择工作区";
    readonly 'panel.title': "提示胶囊";
    readonly 'panel.close': "关闭";
    readonly 'panel.mode.pick': "选用";
    readonly 'panel.mode.manage': "管理";
    readonly 'panel.manage.groupHeading': "胶囊分组";
    readonly 'panel.manage.newGroup': "新建";
    readonly 'panel.manage.renameGroup': "重命名分组";
    readonly 'panel.manage.deleteGroup': "删除分组";
    readonly 'panel.manage.newCapsule': "新建胶囊";
    readonly 'panel.manage.exportGroup': "导出分组";
    readonly 'panel.manage.importGroup': "导入分组";
    readonly 'panel.manage.editCapsule': "编辑";
    readonly 'panel.manage.deleteCapsule': "删除";
    readonly 'panel.manage.save': "保存";
    readonly 'panel.manage.cancel': "取消";
    readonly 'panel.manage.displayName': "展示名";
    readonly 'panel.manage.capsuleTitle': "标题";
    readonly 'panel.manage.capsuleBody': "正文";
    readonly 'panel.manage.drag.group': "拖拽排序分组";
    readonly 'panel.manage.drag.capsule': "拖拽排序胶囊";
    readonly 'panel.manage.confirm.deleteGroup.title': "删除分组？";
    readonly 'panel.manage.confirm.deleteGroup.body': "将删除该分组及其全部胶囊。此操作无法撤销。";
    readonly 'panel.manage.confirm.deleteCapsule.title': "删除胶囊？";
    readonly 'panel.manage.confirm.deleteCapsule.body': "将从当前分组删除这条胶囊。此操作无法撤销。";
    readonly 'panel.manage.confirm.import.title': "导入分组？";
    readonly 'panel.manage.confirm.import.body': "目标分组 {groupId}：将写入 {writeCount} 条胶囊，将删除 {deleteCount} 条库中有而文件中无的胶囊。";
    readonly 'panel.manage.confirm.action': "确认删除";
    readonly 'panel.manage.confirm.import.action': "确认导入";
    readonly 'panel.manage.submitting': "正在保存";
    readonly 'panel.empty.manage': "这个分组还没有胶囊。点「新建胶囊」添加一条。";
    readonly 'panel.search.aria': "搜索胶囊标题";
    readonly 'panel.search.placeholder': "搜索标题…";
    readonly 'panel.inject.confirm.title': "写入对话框";
    readonly 'panel.inject.confirm.body': "替换会清掉当前文字；追加会接在现有文字后面。";
    readonly 'panel.inject.confirm.replace': "替换当前内容";
    readonly 'panel.inject.confirm.append': "追加到后面";
    readonly 'panel.empty.group': "当前分组还没有胶囊。";
    readonly 'panel.empty.search': "没有匹配的胶囊标题。";
    readonly 'panel.error.remote': "无法加载提示胶囊库，请稍后重试。";
    readonly 'panel.error.retry': "重试";
    readonly 'panel.noWorkspace.body': "请先为会话选择工作区，再选用提示胶囊。";
    readonly 'panel.banner.orphan': "已将磁盘上未登记的分组自动纳入工作区提示胶囊库。";
    readonly 'panel.banner.orphan.dismiss': "关闭提示";
};
/** English dictionary, key-identical to the Chinese source of truth. */
export declare const en: Record<SopCapsulesKey, string>;
/** Locale keys for the sop-capsules namespace. */
export type SopCapsulesKey = keyof typeof zh;
//# sourceMappingURL=locales.d.ts.map