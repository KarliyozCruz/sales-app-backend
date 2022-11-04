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
import SaleDetail from './SaleDetail';
import User from './User';

@Table({
    tableName: 'sale',
	timestamps: false
})

export default class Sale extends Model<Sale> {

	@ForeignKey(() => User)
    @IsInt
    @Column
    declare user_id: number;

    @BelongsTo(() => User, 'user_id')
    declare userIdObject: User;

	@IsInt
	@Column
	declare total: number;

	@HasMany(() => SaleDetail, 'sale_id')
    declare saleDetails: SaleDetail[];

	// @CreatedAt
	// @IsDate
	// @Column(DataType.TIME)
	// created_at: Date;

	// @UpdatedAt
	// @IsDate
	// @Column(DataType.TIME)
	// updated_at: Date;

}
