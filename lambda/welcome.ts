type AppSyncEvent = {
  info: {
    fieldName: String;
  };
};

export async function handler(event: AppSyncEvent) {
  if (event.info.fieldName == "welcome") {
    return "Welcome from AppSync Lambda";
  } else if (event.info.fieldName == "hello") {
    return "Hello World from AppSync Lambda";
  } else {
    return "Not Found!";
  }
}
