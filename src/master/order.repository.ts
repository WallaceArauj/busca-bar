import { Repository } from 'typeorm';
import { Order } from './order.entity';

export class OrderRepository extends Repository<Order> {

    async findByUserId(userId: number): Promise<Order[]> {
        return this.find({ where: { userId } });
    }

    async findByBarId(barId: number): Promise<Order[]> {
        return this.find({ where: { barId } });
    }

}
