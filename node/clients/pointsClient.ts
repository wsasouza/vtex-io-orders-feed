import { InstanceOptions, IOContext, ExternalClient } from '@vtex/api'

export class PointsClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://gs9vut5z2m.execute-api.sa-east-1.amazonaws.com', context, options)
  }

  public getPoints = () => {
    // logica here
  }
}
