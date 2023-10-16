// RESPONSES FILE
// ============================================================
exports.paging = (sequelizeResult: any, page: any, limit: any) => ({
  page,
  limit,
  total: sequelizeResult.count,
  data: sequelizeResult.rows,
})
