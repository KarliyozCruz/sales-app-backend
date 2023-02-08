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
	DeletedAt,
	IsEmail
} from 'sequelize-typescript';
import Sale from './Sale';

@Table({
    tableName: 'user',
	paranoid: true
})

export default class User extends Model<User> {

	@Length({min: 1, max: 45, msg: 'Longitud incorrecta del atributo names'})
	@Column
	declare names: string;

    @Length({min: 1, max: 45, msg: 'Longitud incorrecta del atributo last_names'})
	@Column
	declare last_names: string;
	
	@IsEmail
	@Column
	declare email: string;

	@Column
	declare password: string;
	
	@CreatedAt
	@IsDate
	@Column(DataType.TIME)
	created_at: Date;
	
	@UpdatedAt
	@IsDate
	@Column(DataType.TIME)
	updated_at: Date;
	
	@DeletedAt
	@IsDate
	@Column(DataType.TIME)
	deleted_at: Date;
	
	@HasMany(() => Sale, 'user_id')
	declare sales: Sale[];
}
