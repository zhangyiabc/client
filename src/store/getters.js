const getters = {
  token: state => state.user.authorization,
  avatar: state => state.user.userInfo.UserInfo.avatar,
  author: state => state.user.userInfo.author,
  userInfo:state => state.user.userInfo.UserInfo,
  AdminId: state => state.user.userInfo.id,
  username: state => state.user.userInfo.username,
  // getDatasFn: state => state.statusDatas,
  // getRulesFn: state => state.ruleDatas,
  // roles: state => state.user.roles,
  // abilityStatusFun: state => state.abilityStatus,
  // abilityAddFun: state => state.abilityParams,
  // abilityEditFun: state => state.editParams,
  // routes: state => state.permission.routes
}
export default getters
