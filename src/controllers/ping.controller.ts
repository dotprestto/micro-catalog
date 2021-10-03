import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {
  get, Request, response,
  ResponseObject, RestBindings
} from '@loopback/rest';
import {CategoryRepository} from '../repositories';

/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE: ResponseObject = {
  description: 'Ping Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'PingResponse',
        properties: {
          greeting: {type: 'string'},
          },
        },
    },
  },
};

/**
 * A simple controller to bounce back http requests
 */
export class PingController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request,
  @repository(CategoryRepository) private categoryRepo: CategoryRepository) {}

  // Map to `GET /ping`
  @get('/ping')
  @response(200, PING_RESPONSE)
  ping(): object {
    // Reply with a greeting, the current time, the url, and request headers
    return {
      greeting: 'Hello from LoopBack3333',
    };
  }

  @get('/category')
  async index() {
   const resp =  await this.categoryRepo.create({
      id: '1',
      description: 'description',
      name: 'first category'
    })

    console.log(resp)
    return this.categoryRepo.find();
  }
}
