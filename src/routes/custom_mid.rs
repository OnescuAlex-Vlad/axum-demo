use axum::Extension;

#[derive(Clone)]
pub struct HeaderMessage(pub String);

pub async fn custom_mid(Extension(msg): Extension<HeaderMessage>) -> String {
    msg.0
}
