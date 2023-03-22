# AWS ECR

`This repository will help you to understand, how to push your docker images to AWS ECR using Github actions`

## STEPS

1. <b>CREATE PRIVATE REPOSITORY IN ECR</b>

- Login to you AWS account
- Go to `AWS Container Registry` service and create a `private` repository
- Create Private Repository with a suitable name

2. <b>CREATE IAM USER</b>

- Create IAM user and create an inline policy
- An Inline policy will allow the IAM user to login to ECR, build and tag docker images and push docker images to `AWS ECR`

### Policy Examples

1. The following policy will enable user to push docker images to `any ECR registry`

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ecr:CompleteLayerUpload",
                "ecr:GetAuthorizationToken",
                "ecr:UploadLayerPart",
                "ecr:InitiateLayerUpload",
                "ecr:BatchCheckLayerAvailability",
                "ecr:PutImage"
            ],
            "Resource": "*"
        }
    ]
}
```

2. The following policy will enable/restrict user to push docker images to a `specific ECR registry`

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ecr:CompleteLayerUpload",
                "ecr:UploadLayerPart",
                "ecr:InitiateLayerUpload",
                "ecr:BatchCheckLayerAvailability",
                "ecr:PutImage"
            ],
            "Resource": "arn:aws:ecr:region:111122223333:repository/repository-name"
        },
        {
            "Effect": "Allow",
            "Action": "ecr:GetAuthorizationToken",
            "Resource": "*"
        }
    ]
}
```

## How to use the Github Action workFlow (used in this repository)

<b>Set the following secret variables in your repository secrets</b>

- `AWS_ACCESS_KEY_ID`
- `AWS_SECREST_ACCESS_KEY`
- `AWS_ECR_REGION`
- `ECR_REPOSITORY_NAME`


#### HAPPY CLOUD LEARNING
