terraform {
  required_providers {
    cloudflare = {
      source = "cloudflare/cloudflare"
      version = "4.20.0"
    }
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.38.0"
    }
  }

  // Not actually amazon S3. cloudflare R2 - aws-S3-compatible.
  // different auth token than the rest of cloudflare: https://dash.cloudflare.com/fed1bc67ffb2f62c6deaa5c7f8f9eb93/r2/api-tokens
  // directions here: https://github.com/hashicorp/terraform/issues/33847#issuecomment-1854605813
  backend "s3" {
    // bucket content: https://dash.cloudflare.com/fed1bc67ffb2f62c6deaa5c7f8f9eb93/r2/default/buckets/erosson-infra
    bucket = "erosson-infra"
    key    = "erosson/infra/static-sites/terraform.tfstate"
    endpoints = { s3 = "https://fed1bc67ffb2f62c6deaa5c7f8f9eb93.r2.cloudflarestorage.com" }
    region = "us-east-1"

    skip_credentials_validation = true
    skip_region_validation = true
    skip_requesting_account_id  = true
    skip_metadata_api_check = true
    skip_s3_checksum = true
  }
}

provider "aws" {
  region = "us-east-1"
}
provider "digitalocean" {
  # requires env DIGITALOCEAN_TOKEN. https://registry.terraform.io/providers/digitalocean/digitalocean/latest/docs
}