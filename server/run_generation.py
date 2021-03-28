import gpt_2_simple as gpt2
from datetime import datetime


sess = gpt2.start_tf_sess()
gpt2.load_gpt2(sess, run_name='run3')

text = gpt2.generate(sess, run_name='run3', return_as_list=True)[0]


text2 = gpt2.generate(sess,
              run_name='run3',
              length=250,
              temperature=0.95,
              prefix="The deep sea monster",
              nsamples=5,
              batch_size=5,
              return_as_list=True)[0]

print(text)

print(text2)