const code = {
    success:0,
    errCreate:1,
    errUpdate:2,
    errRetrieve:3,
    errDelete:4,
    errPostValueEmpty:5,
};

exports.code = code;
exports.errArr = {
    1: '创建记录失败',
    2: '更新记录失败',
    3: '查询记录失败',
    4: '删除记录失败',
    5: '缺少必要字段',
};