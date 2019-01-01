export enum code {
    success,
    errCreate,
    errUpdate,
    errRetrieve,
    errDelete,
    errPostValueEmpty,
    errLogin,
    errLogout,
}

export const errArr = {
    1: '创建记录失败',
    2: '更新记录失败',
    3: '查询记录失败',
    4: '删除记录失败',
    5: '缺少必要字段',
    6: '登录失败',
    7: '登出失败',
}