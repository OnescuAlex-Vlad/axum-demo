use axum::{
    http::{Request, StatusCode},
    middleware::Next,
    response::Response,
};

use super::custom_mid::HeaderMessage;

pub async fn set_mid_custom_header<B>(
    mut request: Request<B>,
    next: Next<B>,
) -> Result<Response, StatusCode> {
    let headers = request.headers();
    let msg = headers.get("msg").ok_or_else(|| StatusCode::BAD_REQUEST)?;
    let msg = msg
        .to_str()
        .map_err(|_error| StatusCode::BAD_REQUEST)?
        .to_owned();
    let extension = request.extensions_mut();
    extension.insert(HeaderMessage(msg));
    Ok(next.run(request).await)
}
