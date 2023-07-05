import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { BarRepository } from './bar.repository';
import { OrderRepository } from './order.repository';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(BarRepository)
        private barRepository: BarRepository,
        @InjectRepository(UserRepository) 
        private userRepository: UserRepository,
        @InjectRepository(OrderRepository)
        private orderRepository: OrderRepository,
    ) { }


    async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
        const { barId, userId } = createOrderDto;
      
        const foundBar = await this.barRepository.findOne({ where: { id: barId } });
        if (!foundBar) {
          throw new NotFoundException('Bar not found');
        }
      
        const foundUser = await this.userRepository.findOne({ where: { id: userId } });
        if (!foundUser) {
          throw new NotFoundException('User not found');
        }
      
        const order: Order = new Order();
        order.id = null;
        order.barId = foundBar.id;
        order.userId = foundUser.id;
      
        const createdOrder = await this.orderRepository.create(order);
        const savedOrder = await this.orderRepository.save(createdOrder);
      
        return savedOrder;
      }
      
}
