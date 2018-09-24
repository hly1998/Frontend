import {Component, Input, OnInit} from '@angular/core';
import { Assortment } from '../../Interface/userinfo';
import {Archive} from '../../Interface/userinfo';
import {PopularReport} from '../../Interface/userinfo';
import {Label} from '../../Interface/userinfo';
import {RouterjudgeService} from '../routerjudge.service';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.less']
})
export class ClassificationComponent implements OnInit {
  @Input() userid: number;
  @Input() classifyInfo: Assortment;
  all_archive: Archive[] = [];
  all_labels: Label[] = [];
  all_pop_report: PopularReport[] = [];
  constructor(private routerjudge: RouterjudgeService) { }

  ngOnInit() {
    this.initInfo();
  }
  gotoArchive = ( archive_id: number) => {
    this.routerjudge.gotoReportbyArchive(this.userid, archive_id);
  }
  gotoLabel = (label_id: number) => {
    this.routerjudge.gotoReportbyLabel(this.userid, label_id);
  }
  initInfo() {
    this.all_archive = this.classifyInfo.archives;
    this.all_pop_report = this.classifyInfo.popular_reports;
    this.all_labels = this.classifyInfo.labels;
  }
}
