const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define( 'user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define( 'basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
const BasketCloth = sequelize.define( 'basket_cloth', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Cloth = sequelize.define('cloth', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define( 'type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull:false},
}
)
const Brand = sequelize.define( 'brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull:false},
})

const Rating = sequelize.define( 'rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const ClothInfo = sequelize.define( 'cloth_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull:false},
    description: {type: DataTypes.STRING, allowNull:false},
})

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketCloth)
BasketCloth.belongsTo(Basket)

Type.hasMany(Cloth)
Cloth.belongsTo(Type)

Brand.hasMany(Cloth)
Cloth.belongsTo(Brand)

Cloth.hasMany(Rating)
Rating.belongsTo(Cloth)

Cloth.hasMany(BasketCloth)
BasketCloth.belongsTo(Cloth)

Cloth.hasMany(ClothInfo, {as: 'info'})
ClothInfo.belongsTo(Cloth)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

module.exports = {
    User, 
    Basket, 
    BasketCloth, 
    Cloth, 
    Type, 
    Brand, 
    Rating, 
    TypeBrand, 
    ClothInfo
}


