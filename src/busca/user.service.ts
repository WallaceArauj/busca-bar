import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private readonly users: UserEntity[] = [];

  createUser(createUserDto: CreateUserDto): UserEntity {
    const user: UserEntity = {
      id: this.users.length + 1,
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
      // Outros campos do usuário, se necessário
    };
    this.users.push(user);
    return user;
  }

  // Outros métodos do serviço do usuário, como login, busca de usuário, atualização de perfil, etc.
}
