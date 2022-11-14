import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;
  // TuGraph
  router.get("/tugraph/explore.html", controller.tugraph.index);
  router.post("/api/tugraph/connect", controller.tugraph.connect);
  router.post(
    "/api/tugraph/languagequery",
    controller.tugraph.queryByGraphLanguage
  );
  router.post("/api/tugraph/neighbors", controller.tugraph.queryNeighbors);
  router.get("/api/tugraph/schema", controller.tugraph.getSchema);
  router.get("/api/tugraph/list", controller.tugraph.getSubGraphList);
  router.get("/api/tugraph/count", controller.tugraph.getVertexEdgeCount);
};
