export interface CognitoConfig {
  enabled: boolean;
  client_id?: string;
  clientId?: string;
  domain?: string;
  region?: string;
  redirect_uri?: string;
  redirectUri?: string;
  logout_url?: string;
  logoutUrl?: string;
}

export interface WhoAmIBaseline {
  provider: string;
  model: string;
  source: string;
}

export interface WhoAmIRateLimitConfig {
  requests_per_minute: number;
  daily_cap_scope: string;
  daily_token_cap?: number;
  daily_cost_cap?: number;
}

export interface WhoAmIBreakerConfig {
  failure_threshold: number;
  window_seconds: number;
  cooldown_seconds: number;
  scope: string;
}

export interface WhoAmIResponse {
  api_key_id?: string;
  user_id?: string;
  plan_tier?: string;
  storage_policy: string;
  redact_pii: boolean;
  baseline: WhoAmIBaseline;
  rate_limits: WhoAmIRateLimitConfig;
  breakers: WhoAmIBreakerConfig;
}
