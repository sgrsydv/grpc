Compile
python3 -m grpc_tools.protoc --proto_path=.. calculator.proto --python_out=. --grpc_python_out=.

Install python packages
pip install grpcio grpcio-tools


