import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Users } from '../../users/entities/user.entity';

@Entity('favorites')
export class Favorites {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  id_product: string;

  @ManyToOne(() => Users, (user) => user.favorites, { onDelete: 'CASCADE' })
  user: Users;
}
