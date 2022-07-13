// const { Op } = require("sequelize");
const { Goods } = require("@models/goods");

class GoodsDao {
  // 创建分类
  static async create(params = {}) {
    const { goodsInfoString } = params;

    const goodsInfoList = JSON.parse(goodsInfoString);

    try {
      goodsInfoList.forEach(async (item) => {
        const goods = new Goods();
        goods.name = item.name;
        goods.goods_id = item.goods_id;
        goods.pid = item.pid || 0;
        goods.price = item.price;

        const res = await goods.save();
        console.log("res", res);
      });

      const data = {
        msg: "导入数据成功",
      };

      return [null, data];
    } catch (error) {
      return [error, null];
    }
  }

  //   // 删除分类
  //   static async destroy(id) {
  //     // 查询分类
  //     const category = await Category.findOne({
  //       where: {
  //         id,
  //         deleted_at: null
  //       }
  //     });
  //     if (!category) {
  //       throw new global.errs.NotFound('没有找到相关分类');

  //     }
  //     try {
  //       const res = await category.destroy()
  //       return [null, res]

  //     } catch (err) {
  //       return [err, null]
  //     }
  //   }

  //   // 获取分类详情
  //   static async detail(id) {
  //     try {
  //       const category = await Category.scope('bh').findOne({
  //         where: {
  //           id,
  //           deleted_at: null
  //         }
  //       });
  //       if (!category) {
  //         throw new global.errs.NotFound('没有找到相关分类');
  //       }

  //       return [null, category]
  //     } catch (err) {
  //       return [err, null]
  //     }
  //   }

  //   // 更新分类
  //   static async update(id, v) {
  //     const category = await Category.findByPk(id);
  //     if (!category) {
  //       throw new global.errs.NotFound('没有找到相关分类');
  //     }
  //     category.name = v.get('body.name');
  //     category.status = v.get('body.status');
  //     category.sort_order = v.get('body.sort_order');
  //     category.pid = v.get('body.pid') || 0;

  //     try {
  //       const res = await category.save();
  //       return [null, res]
  //     } catch (err) {
  //       return [err, null]
  //     }
  //   }

  //   // 分类列表
  //   static async list(query = {}) {
  //     const { status, name, id, page_size = 10, page = 1 } = query
  //     let params = {}
  //     if (status) {
  //       params.status = status
  //     }

  //     if (name) {
  //       params.name = {
  //         [Op.like]: `%${name}%`
  //       };
  //     }

  //     if (id) {
  //       params.id = id
  //     }

  //     console.log('params', params)
  //     try {
  //       const category = await Category.scope('bh').findAndCountAll({
  //         where: params,
  //         limit: page_size, //每页10条
  //         offset: (page - 1) * page_size,
  //         order: [
  //           ['created_at', 'DESC']
  //         ]
  //       });

  //       const data = {
  //         data: category.rows,
  //         // 分页
  //         meta: {
  //           current_page: parseInt(page),
  //           per_page: 10,
  //           count: category.count,
  //           total: category.count,
  //           total_pages: Math.ceil(category.count / 10),
  //         }
  //       }

  //       return [null, data]

  //     } catch (err) {
  //       console.log('err', err)

  //       return [err, null]
  //     }
  //   }
}

module.exports = {
  GoodsDao,
};
