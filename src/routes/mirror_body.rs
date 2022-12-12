use axum::Json;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Mirror {
    msg: i32,
}

#[derive(Serialize, Debug)]
pub struct Res {
    msg: i32,
    counter: i32,
}

#[derive(Serialize)]
pub struct Counter {
    num: i32,
}

pub async fn mirror(Json(body): Json<Mirror>) -> Json<Res> {
    let counted = count(body.msg);
    let res: Res = Res {
        msg: body.msg,
        counter: counted,
    };
    Json(res)
}

pub fn count(code: i32) -> i32 {
    let mut num = 0;
    if code == 200 {
        num += 1;
        let res = num;
        num = res
    }
    num
}
