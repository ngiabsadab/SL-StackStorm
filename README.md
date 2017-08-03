# SL-StackStorm
post webhook to run python
    # 1 สร้าง flie python
    $ cd /opt
    $ nano hello.py
      print "Hello world!"
    #save
    
    # 2 ทดสอบ run file เพื่อ commadn การ run file นี้ไปใส่ใน action
    $ python /opt/hello.py
    
    # 3 create rule
    $ cd /opt/my-rule
    $ nano rule_run_python.yaml
      ---
        name: "rule_run_python"
        pack: "examples"
        description: "Sample rule dumping webhook payload to run script python."
        enabled: true
    
        trigger:
            type: "core.st2.webhook"
            parameters:
                url: "sample"
    
        criteria:
            trigger.body.action:
                pattern: "runpython"
                type: "equals"
    
        action:
            ref: "core.local"
            parameters:
                cmd: "python /opt/hello.py"
    #save
    
    # 4 register rule
    $ st2 rule create rule_run_python.yaml
    $ st2ctl reload --register-rules
    #ตรวจสอบดู rule ที่สร้างมาใหม่
    $ st2 rule list
    
    # 5 ทดสอบ rule การทดสอบคือ เมื่เรา post data {"action": "runpython"} ให้ไป run cmd $python /opt/hello.py
    curl \
    -k https://35.187.229.166/api/v1/webhooks/sample \
    -d '{"action": "runpython"}' -H 'Content-Type: application/json' \
    -H 'X-Auth-Token: b8d73941e3f64210903123810e4f2c5f'
