# FRONTEND_TASKS
Shared:
- App shell (sidebar+topbar), breadcrumbs, skeletons
- Routes: `/`, `/dashboard`, `/health`, `/settings`
- Health fetch: `/healthz`, `/readyz`, `/v1/ping` via SDK
- SDK wrapper with zod + error normalization

Suite A:
- Dashboard cards: service health, recent activity (mock)
- Settings: read-only env snapshot (mock)

Suite B:
- Endpoint explorer: mocked list + curl copy

Suite C:
- Alerts list (mock), alert routing placeholders
