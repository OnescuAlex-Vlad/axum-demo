use axum::http::StatusCode;

pub async fn errors() -> Result<(), StatusCode> {
    Err(StatusCode::IM_A_TEAPOT)
}
