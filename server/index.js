const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('../calculator.proto');
const grpcObject = grpc.loadPackageDefinition(packageDefinition);
const calculatorProto = grpcObject.Calculator;

function add(call, callback) {
  console.log('add invoked', call.request)
  const result = call.request.a + call.request.b;
  callback(null, { value: result });
}
function multiply(call, callback) {
  console.log('multiply invoked', call.request)
  const result = call.request.a * call.request.b;
  callback(null, { value: result });
}

function main() {
  const address = '127.0.0.1:50051'
  const server = new grpc.Server();
  server.addService(calculatorProto.service, { add: add, multiply: multiply });
  server.bind(address, grpc.ServerCredentials.createInsecure());
  server.start();
  console.log(`Server running at grpc://${address}`);
}

main();
