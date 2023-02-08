import {
    Table,
    Column,
    Model,
    Length,
	DataType,
	IsDate,
	CreatedAt,
	UpdatedAt,
	HasMany,
	ForeignKey,
	IsInt,
	BelongsTo
} from 'sequelize-typescript';
import Category from './Category';
import SaleDetail from './SaleDetail';

@Table({
    tableName: 'product'
})

export default class Product extends Model<Product> {

	@Length({min: 0, max: 100, msg: 'Longitud incorrecta del atributo description'})
	@Column
	declare description: string;

	@IsInt
	@Column
	declare price: number;

	@ForeignKey(() => Category)
    @IsInt
    @Column
    declare category_id: number;

    @BelongsTo(() => Category, 'category_id')
    declare categoryIdObject: Category;

	@IsInt
	@Column
	declare stock: number;

	@HasMany(() => SaleDetail, 'product_id')
    declare saleDetails: SaleDetail[];

	@CreatedAt
	@IsDate
	@Column(DataType.TIME)
	created_at: Date;

	@UpdatedAt
	@IsDate
	@Column(DataType.TIME)
	updated_at: Date;

}
