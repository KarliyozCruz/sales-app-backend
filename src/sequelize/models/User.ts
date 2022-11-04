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
import Sale from './Sale';

@Table({
    tableName: 'user',
	timestamps: false
})

export default class User extends Model<User> {

	@Length({min: 0, max: 100, msg: 'Longitud incorrecta del atributo description'})
	@Column
	declare names: string;

    @Length({min: 0, max: 100, msg: 'Longitud incorrecta del atributo description'})
	@Column
	declare last_names: string;

	@HasMany(() => Sale, 'user_id')
    declare sales: Sale[];

	// @CreatedAt
	// @IsDate
	// @Column(DataType.TIME)
	// created_at: Date;

	// @UpdatedAt
	// @IsDate
	// @Column(DataType.TIME)
	// updated_at: Date;

}
