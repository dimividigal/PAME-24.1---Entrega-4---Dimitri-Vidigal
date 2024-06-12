import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { MateriaisModule } from './materiais/materiais.module';
import { PecasModule } from './pecas/pecas.module';
import { EstoqueModule } from './estoque/estoque.module';
import { CheklistModule } from './cheklist/cheklist.module';

@Module({
  imports: [FuncionarioModule, MateriaisModule, PecasModule, EstoqueModule, CheklistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
