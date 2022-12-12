(function() {var implementors = {};
implementors["axum"] = [{"text":"impl&lt;S, T&gt; <a class=\"trait\" href=\"tower_layer/trait.Layer.html\" title=\"trait tower_layer::Layer\">Layer</a>&lt;S&gt; for <a class=\"struct\" href=\"axum/struct.Extension.html\" title=\"struct axum::Extension\">Extension</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,&nbsp;</span>","synthetic":false,"types":["axum::extension::Extension"]},{"text":"impl&lt;S, F, T&gt; <a class=\"trait\" href=\"tower_layer/trait.Layer.html\" title=\"trait tower_layer::Layer\">Layer</a>&lt;S&gt; for <a class=\"struct\" href=\"axum/error_handling/struct.HandleErrorLayer.html\" title=\"struct axum::error_handling::HandleErrorLayer\">HandleErrorLayer</a>&lt;F, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["axum::error_handling::HandleErrorLayer"]},{"text":"impl&lt;E, S&gt; <a class=\"trait\" href=\"tower_layer/trait.Layer.html\" title=\"trait tower_layer::Layer\">Layer</a>&lt;S&gt; for <a class=\"struct\" href=\"axum/extract/extractor_middleware/struct.ExtractorMiddlewareLayer.html\" title=\"struct axum::extract::extractor_middleware::ExtractorMiddlewareLayer\">FromExtractorLayer</a>&lt;E&gt;","synthetic":false,"types":["axum::middleware::from_extractor::FromExtractorLayer"]},{"text":"impl&lt;S, F&gt; <a class=\"trait\" href=\"tower_layer/trait.Layer.html\" title=\"trait tower_layer::Layer\">Layer</a>&lt;S&gt; for <a class=\"struct\" href=\"axum/middleware/struct.FromFnLayer.html\" title=\"struct axum::middleware::FromFnLayer\">FromFnLayer</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["axum::middleware::from_fn::FromFnLayer"]}];
implementors["axum_core"] = [{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"tower_layer/trait.Layer.html\" title=\"trait tower_layer::Layer\">Layer</a>&lt;S&gt; for <a class=\"struct\" href=\"axum_core/extract/struct.DefaultBodyLimit.html\" title=\"struct axum_core::extract::DefaultBodyLimit\">DefaultBodyLimit</a>","synthetic":false,"types":["axum_core::extract::default_body_limit::DefaultBodyLimit"]}];
implementors["tower"] = [{"text":"impl&lt;S, F&gt; <a class=\"trait\" href=\"tower/trait.Layer.html\" title=\"trait tower::Layer\">Layer</a>&lt;S&gt; for <a class=\"struct\" href=\"tower/util/struct.AndThenLayer.html\" title=\"struct tower::util::AndThenLayer\">AndThenLayer</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["tower::util::and_then::AndThenLayer"]},{"text":"impl&lt;In, T, U, E&gt; <a class=\"trait\" href=\"tower/trait.Layer.html\" title=\"trait tower::Layer\">Layer</a>&lt;In&gt; for <a class=\"struct\" href=\"tower/util/struct.BoxLayer.html\" title=\"struct tower::util::BoxLayer\">BoxLayer</a>&lt;In, T, U, E&gt;","synthetic":false,"types":["tower::util::boxed::layer::BoxLayer"]},{"text":"impl&lt;S, A, B&gt; <a class=\"trait\" href=\"tower/trait.Layer.html\" title=\"trait tower::Layer\">Layer</a>&lt;S&gt; for <a class=\"enum\" href=\"tower/util/enum.Either.html\" title=\"enum tower::util::Either\">Either</a>&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tower/trait.Layer.html\" title=\"trait tower::Layer\">Layer</a>&lt;S&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"tower/trait.Layer.html\" title=\"trait tower::Layer\">Layer</a>&lt;S&gt;,&nbsp;</span>","synthetic":false,"types":["tower::util::either::Either"]},{"text":"impl&lt;S, F&gt; <a class=\"trait\" href=\"tower/trait.Layer.html\" title=\"trait tower::Layer\">Layer</a>&lt;S&gt; for <a class=\"struct\" href=\"tower/util/struct.MapErrLayer.html\" title=\"struct tower::util::MapErrLayer\">MapErrLayer</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["tower::util::map_err::MapErrLayer"]},{"text":"impl&lt;S, F&gt; <a class=\"trait\" href=\"tower/trait.Layer.html\" title=\"trait tower::Layer\">Layer</a>&lt;S&gt; for <a class=\"struct\" href=\"tower/util/struct.MapRequestLayer.html\" title=\"struct tower::util::MapRequestLayer\">MapRequestLayer</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["tower::util::map_request::MapRequestLayer"]},{"text":"impl&lt;S, F&gt; <a class=\"trait\" href=\"tower/trait.Layer.html\" title=\"trait tower::Layer\">Layer</a>&lt;S&gt; for <a class=\"struct\" href=\"tower/util/struct.MapResponseLayer.html\" title=\"struct tower::util::MapResponseLayer\">MapResponseLayer</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["tower::util::map_response::MapResponseLayer"]},{"text":"impl&lt;S, F&gt; <a class=\"trait\" href=\"tower/trait.Layer.html\" title=\"trait tower::Layer\">Layer</a>&lt;S&gt; for <a class=\"struct\" href=\"tower/util/struct.MapResultLayer.html\" title=\"struct tower::util::MapResultLayer\">MapResultLayer</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["tower::util::map_result::MapResultLayer"]},{"text":"impl&lt;S, F&gt; <a class=\"trait\" href=\"tower/trait.Layer.html\" title=\"trait tower::Layer\">Layer</a>&lt;S&gt; for <a class=\"struct\" href=\"tower/util/struct.MapFutureLayer.html\" title=\"struct tower::util::MapFutureLayer\">MapFutureLayer</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["tower::util::map_future::MapFutureLayer"]},{"text":"impl&lt;S, F&gt; <a class=\"trait\" href=\"tower/trait.Layer.html\" title=\"trait tower::Layer\">Layer</a>&lt;S&gt; for <a class=\"struct\" href=\"tower/util/struct.ThenLayer.html\" title=\"struct tower::util::ThenLayer\">ThenLayer</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["tower::util::then::ThenLayer"]},{"text":"impl&lt;S, L&gt; <a class=\"trait\" href=\"tower/trait.Layer.html\" title=\"trait tower::Layer\">Layer</a>&lt;S&gt; for <a class=\"struct\" href=\"tower/struct.ServiceBuilder.html\" title=\"struct tower::ServiceBuilder\">ServiceBuilder</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"tower/trait.Layer.html\" title=\"trait tower::Layer\">Layer</a>&lt;S&gt;,&nbsp;</span>","synthetic":false,"types":["tower::builder::ServiceBuilder"]}];
implementors["tower_http"] = [{"text":"impl&lt;S, F&gt; <a class=\"trait\" href=\"tower_layer/trait.Layer.html\" title=\"trait tower_layer::Layer\">Layer</a>&lt;S&gt; for <a class=\"struct\" href=\"tower_http/map_response_body/struct.MapResponseBodyLayer.html\" title=\"struct tower_http::map_response_body::MapResponseBodyLayer\">MapResponseBodyLayer</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["tower_http::map_response_body::MapResponseBodyLayer"]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"tower_layer/trait.Layer.html\" title=\"trait tower_layer::Layer\">Layer</a>&lt;S&gt; for <a class=\"struct\" href=\"tower_http/cors/struct.CorsLayer.html\" title=\"struct tower_http::cors::CorsLayer\">CorsLayer</a>","synthetic":false,"types":["tower_http::cors::CorsLayer"]}];
implementors["tower_layer"] = [];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()