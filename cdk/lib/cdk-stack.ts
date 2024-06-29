import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Network } from './modules/network/network';

export interface CdkStackProps extends cdk.StackProps {
  namePrefix: string;
  envValues: any;
}

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: CdkStackProps) {
    super(scope, id, props);

    const { namePrefix, envValues } = props;

    const network = new Network(this, 'Network', {
      namePrefix,
      envValues,
    });
  }
}
