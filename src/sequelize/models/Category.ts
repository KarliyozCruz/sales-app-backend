import {
    Table,
    Column,
    Model,
    Length,
	DataType,
	IsDate,
	CreatedAt,
	UpdatedAt,
	HasMany
} from 'sequelize-typescript';
import Product from './Product';

@Table({
    tableName: 'category',
	timestamps: false
})

export default class Category extends Model<Category> {

	@Length({min: 0, max: 100, msg: 'Longitud incorrecta del atributo description'})
	@Column
	declare description: string;

	@HasMany(() => Product, 'category_id')
    declare products: Product[];

	// @CreatedAt
	// @IsDate
	// @Column(DataType.TIME)
	// created_at: Date;

	// @UpdatedAt
	// @IsDate
	// @Column(DataType.TIME)
	// updated_at: Date;

}
