const {
  Rule,
  LinValidator
} = require('@core/lin-validator-v2')

class GoodsValidator extends LinValidator {
  constructor() {
    super()
    this.goodsInfoString = [new Rule("isLength", "分类 name 名字不能为空", { min: 1 })]
  }
}

class PositiveIdParamsValidator extends LinValidator {
  constructor() {
    super();
    this.id = [
      new Rule('isInt', '分类ID需要正整数', { min: 1 })
    ]
  }
}

module.exports = {
  GoodsValidator,
  PositiveIdParamsValidator
}
