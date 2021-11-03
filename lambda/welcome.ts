type AppSyncEvent = {
  info: {
    fieldName: String;
  };
  arguments: {
    product: Product;
  };
};

type Product = {
  name: String;
  price: Number;
};

export async function handler(event: AppSyncEvent) {
  if (event.info.fieldName == "welcome") {
    return "Welcome from AppSync Lambda";
  } else if (event.info.fieldName == "hello") {
    return "Hello World from AppSync Lambda";
  } else if (event.info.fieldName == "addProduct") {
    console.log(`Event Data = ${event.arguments.product}`);
    return `Product Data ${event.arguments.product.name}`;
  } else {
    return "Not Found!";
  }
}
