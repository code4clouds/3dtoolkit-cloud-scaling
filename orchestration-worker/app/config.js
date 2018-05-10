'use strict'

export const serviceBus = {
  connectionsString: process.env.AZURE_SERVICEBUS_CONNECTION_STRING,
  topic: process.env.AZURE_SEVICEBUS_TOPIC || '3dtoolkit-infrastructure-topic'

}

export const cosmos = {
  host: process.env.HOST,
  masterKey: process.env.COSMOS_MASTER_KEY
}
