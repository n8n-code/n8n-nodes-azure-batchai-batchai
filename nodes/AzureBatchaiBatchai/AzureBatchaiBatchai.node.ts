import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureBatchaiBatchai implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Batchai Batchai',
                name: 'N8nDevAzureBatchaiBatchai',
                icon: { light: 'file:./azure-batchai-batchai.png', dark: 'file:./azure-batchai-batchai.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure BatchAI Management API.',
                defaults: { name: 'Azure Batchai Batchai' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureBatchaiBatchaiApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
