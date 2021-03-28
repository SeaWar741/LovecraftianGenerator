#!/usr/local/bin/python3

from flask import Flask, abort, jsonify, request
from flask_cors import CORS, cross_origin

import gpt_2_simple as gpt2
from datetime import datetime




app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def generateText(txt):
    sess = gpt2.start_tf_sess()
    gpt2.load_gpt2(sess, run_name='run3')

    text = gpt2.generate(sess,
        run_name='run3',
        length=350,
        temperature=0.7,
        prefix=txt,
        nsamples=1,
        batch_size=1,
        return_as_list=True)[0]
    

    return text

@app.route("/generate", methods=['POST'])
@cross_origin()
def get_gen():
    data = request.get_json()

    if 'text' not in data or len(data['text']) == 0 or 'model' not in data:
        abort(400)
    else:
        text = data['text']
        model = data['model']

        result = generateText(text)

        return jsonify({'result': result})

app.run()