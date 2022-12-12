mod custom_mid;
mod errors;
mod hi;
mod mid;
mod mirror_body;
mod set_mid_custom_header;

use axum::{
    body::Body,
    http::Method,
    middleware,
    routing::{get, patch, post},
    Extension, Router,
};
use custom_mid::custom_mid;
use errors::errors;
use hi::hii;
use mid::middleware_msg;
use mirror_body::mirror;
use set_mid_custom_header::set_mid_custom_header;
use tower_http::cors::{Any, CorsLayer};

#[derive(Clone)]
pub struct SharedData {
    pub msg: String,
}

pub fn create_routes() -> Router<Body> {
    let cors = CorsLayer::new()
        .allow_methods(Method::POST)
        .allow_origin(Any);

    let shared_data = SharedData {
        msg: "yes".to_owned(),
    };

    Router::new()
        .route("/custom_mid", get(custom_mid))
        .route_layer(middleware::from_fn(set_mid_custom_header))
        .route("/", patch(hii))
        .route("/mirror", post(mirror))
        .route("/mid", get(middleware_msg))
        .layer(cors)
        .layer(Extension(shared_data))
        .route("/errors", get(errors))
}
