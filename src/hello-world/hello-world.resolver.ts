/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, { description: 'Hola Mundo es lo que retorna' })
  helloWorld(): string {
    return 'Hola Mundo';
  }

  @Query(() => Float)
  randomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, { description: 'From zero to argument To' })
  randomFromZeroTo(
    @Args('to', { nullable: true, type: () => Int }) to: number = 6,
  ): number {
    return Math.floor(Math.random() * to);
  }
}
