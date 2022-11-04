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
import Product from './Product';
import Sale from './Sale';

@Table({
    tableName: 'sale_detail',
	timestamps: false
})

export default class SaleDetail extends Model<SaleDetail> {

	@ForeignKey(() => Sale)
    @IsInt
    @Column
    declare sale_id: number;

    @BelongsTo(() => Sale, 'sale_id')
    declare saleIdObject: Sale;

	@ForeignKey(() => Product)
    @IsInt
    @Column
    declare product_id: number;

    @BelongsTo(() => Product, 'product_id')
    declare productIdObject: Product;

	@IsInt
	@Column
	declare quantity: number;

	@IsInt
	@Column
	declare price: number;

	// @CreatedAt
	// @IsDate
	// @Column(DataType.TIME)
	// created_at: Date;

	// @UpdatedAt
	// @IsDate
	// @Column(DataType.TIME)
	// updated_at: Date;

}
