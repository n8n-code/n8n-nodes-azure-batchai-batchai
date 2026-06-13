import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureBatchaiBatchaiApi implements ICredentialType {
        name = 'N8nDevAzureBatchaiBatchaiApi';

        displayName = 'Azure Batchai Batchai API';

        icon: Icon = { light: 'file:../nodes/AzureBatchaiBatchai/azure-batchai-batchai.png', dark: 'file:../nodes/AzureBatchaiBatchai/azure-batchai-batchai.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Batchai Batchai API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
