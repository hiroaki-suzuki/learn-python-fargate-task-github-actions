import { Repository } from "aws-cdk-lib/aws-ecr";
import { Construct } from "constructs";

export interface EcsProps {
  readonly namePrefix: string;
  readonly envValues: any;
  readonly vpc: any;
}

export class Ecs extends Construct {
  public readonly repository: Repository;

  constructor(scope: Construct, id: string, props: EcsProps) {
    super(scope, id);

    const { namePrefix, envValues, vpc } = props;

    // ECRの作成
    const repository = this.createEcrRepository(namePrefix);

    this.repository = repository;
  }

  private createEcrRepository(namePrefix: string): Repository {
    return new Repository(this, 'EcrRepository', {
      repositoryName: `${namePrefix}-ecr-repository`,
    });
  }
}